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

                    var str2_5 = parse(data.dados_paciente)[2][5];
                    var str2_7 = formatDate(parse(data.dados_paciente)[2][7]);
                    var str2_11 = parse(data.dados_paciente)[2][11];
                    var str2_13 = parse(data.dados_paciente)[2][13];
                    var str3_13 = parse(data.dados_paciente)[3];
                    var str4_2 = parse(data.dados_paciente)[4][4];
                    var str4_5 = parse(data.dados_paciente)[4];
                    var str4_16 = parse(data.dados_paciente)[4][16];

                    $('#nome').html(str2_5.split("^")[1]);
                    $('#sobrenome').html(str2_5.split("^")[0]);
                    $('#data_nascimento').html(str2_7);
                    $('#cidade').html(str2_11.split("^")[0]);
                    $('#pais').html(str2_11.split("^")[5]);
                    $('#celular').html(str2_13.split("^")[0]);
                    $('#comentario').html(str3_13[3]);
                    $('#exame').html(str4_2.split("^")[1]);
                    $('#codigo_exame').html(str4_2.split("^")[0]);
                    $('#prioridade').html(str4_5[5]);
                    $('#titulo').html(str4_16.split("^")[1]);
                    $('#medico_name').html(str4_16.split("^")[2]);
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

function addDadosUser(data) {
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

function formatDate(date) {
    var dateFormat = new Date(date);
    return dateFormat.getDate() + '/' + (dateFormat.getMonth() + 1) + '/' + dateFormat.getFullYear();
}