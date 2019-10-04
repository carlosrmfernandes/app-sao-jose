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
                                    <td>Idade :12</td>
                                    <td>Sexo: M</td>
                                </tr>
                                <tr>
                                    <td>Exame :12324</td>
                                    <td>Medico : Fernandes</td>
                                    <td>Comentario: fazer o Raio X</td>
                                </tr>
                                <tr>
                                    <td>Cidade: Luanda</td>
                                    <td>Nacionalidade: Angolana</td>
                                    <td>Estado Civil: Casado</td>

                                </tr>
                            </tbody>

                        </table>
                        <table class="table table-striped table-hover">
                            <thead class>
                                <tr>
                                    <th scope="col">Código Hospital</th>
                                    <th scope="col">Hospital Estão Realizando o Exame</th>
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
