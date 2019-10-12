@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item">
                                </li>
                            </ul>
                            <form class="form-inline my-2 my-lg-0" id="buscar-form">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id="search" required>
                                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>
                </div>
                <div class="card-body">
                    @if (session('status'))
                    <div class="alert alert-success" role="alert">
                        {{ session('status') }}
                    </div>
                    @endif
                    <p style="text-align: center" id="nenhum_dado"></p>

                    <div class="table-responsive-xl" id="data">
                        <table style="width:100%" >
                            <tbody id="data-response-busca">
                                <tr>
                                    <td>Nome: <samp id="nome"></samp></td>
                                    <td>Sobrenome: <samp id="sobrenome"></samp></td>
                                    <td>Data de Nascimento: <samp id="data_nascimento"></samp></td>
                                    <td>Cidade: <samp id="cidade"></samp></td>
                                </tr>
                                <tr>
                                    <td>Pais: <samp id="pais"></samp></td>
                                    <td>Celular: <samp id="celular"></samp></td>
                                    <td>Comentario Medico: <samp id="comentario"></samp></td>
                                    <td>Exame: <samp id="exame"></samp></td>
                                    
                                </tr>
                                <tr>
                                    <td> Código de Exame: <samp id="codigo_exame"></samp></td>
                                    <td>Prioridade: <samp id="prioridade"></samp></td>
                                    <td>Titulo: <samp id="titulo"></samp></td>
                                    <td>Medico: <samp id="medico_name"></samp></td>
                                </tr>
                            </tbody>

                        </table>
                        <table class="table table-striped table-hover">
                            <thead class>
                                <tr>
                                    <th scope="col">Código hospitalar</th>
                                    <th scope="col">Hospital com à realização do exame</th>
                                </tr>
                            </thead>
                            <tbody id="data-busca">

                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
<script src="{{asset('js/view/home/index.js') }}"></script>
@endsection
