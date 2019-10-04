$(document).ready(function () {
    var enderecoServidorApi = $('#endereco_servidor_api').val();
    get();
    $('#data').hide();
    $('#nenhum_dado').hide();
    function get() {
        $('#buscar-form').submit(function () {
            $.get(enderecoServidorApi + '/hl7-api/public/V1/message/' + $('#search').val()).done(function (data) {
                if (data.msg) {
                    $('#data').hide();
                    $("#nenhum_dado").text(data.msg);
                    $('#nenhum_dado').show();

                } else if (data.hospitais.length == 0) {
                    $('#data').hide();
                    $("#nenhum_dado").text("Nenhum Hospital Disponível ");
                    $('#nenhum_dado').show();
                } else {
                    var str = parse(data.dados_paciente)[2][5];
                    $('#nome').append(str.split("^")[0]);
                    $('#data-busca tr').detach();
                    $('#nenhum_dado').hide();
                    $('#data').show();
                    $.each(data.hospitais, function (i, value) {
                        addLine(value);

                    });
                }

            });
            return false;
        });
    }
});

var parse = function (str) {
    var segments = str.split('\n');
    return _.map(segments, function (segment) {
        var fields = segment.split('|');
        return _.map(fields, function (field) {
            return _.includes('^') ? field.split('^') : field;
        });
    });
};

function addLine(value) {
    var tr = $('<tr>');
    var length = $('#data-busca tr').length;

    var tdCodigo = $('<td>').append(($('<input>').attr('type', 'hidden').attr('value', value.hospital.id)));
    tdCodigo.append(value.hospital.id);
    tr.append(tdCodigo);

    var tdHospital = $('<td>').append(($('<input>').attr('type', 'hidden').attr('value', value.hospital.hospital)));
    tdHospital.append(value.hospital.hospital);
    tr.append(tdHospital);

    tr.appendTo('#data-busca');
}