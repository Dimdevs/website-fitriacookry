@extends('layouts.dashboard.app')
@section('title', $title ?? 'Permission')
@section('subtitle' , 'Detail Permission')
@section('head')

@endsection
@section('script')
<script src="{{ asset('template/base-admin/src/js/custom/apps/dashboard/product/table.js') }}"></script>
<script src="{{ asset('template/base-admin/src/js/custom/apps/dashboard/product/export-users.js')}}"></script>
<script src="{{ asset('template/base-admin/src/js/custom/apps/dashboard/product/add.js')}}"></script>
@endsection
@section('content')
<div class="post d-flex flex-column-fluid" id="kt_post">
    <!--begin::Container-->
    <div id="kt_content_container" class="container-fluid">
        <!--begin::Card-->
        <div class="card">
            <!--begin::Card header-->
            <div class="card-header border-0 pt-6">
                <!--begin::Card title-->
                <div class="card-title">
                    <!--begin::Search-->
                    <div class="d-flex align-items-center position-relative my-1">
                        <!--begin::Svg Icon | path: icons/duotune/general/gen021.svg-->

                        <!--end::Svg Icon-->
                        {{--  <input type="text" data-kt-user-table-filter="search" class="form-control form-control-solid w-250px ps-14" placeholder="Search {{$title ?? ''}}" />  --}}
                        <h1 class="d-flex align-items-center text-dark fw-bolder fs-3 my-1">Detail Data {{$title ?? ''}}</h1>
                    </div>
                    <!--end::Search-->
                </div>
                <!--begin::Card title-->
                <!--begin::Card toolbar-->
                <div class="card-toolbar">
                    <!--begin::Toolbar-->
                    <div class="d-flex justify-content-end" data-kt-user-table-toolbar="base">
                        
                        <!--end::Svg Icon-->
                        <!--end::Export-->
                        <!--begin::Add user-->

                        <!--end::Svg Icon-->
                        <!--end::Add user-->
                    </div>
                    <!--end::Toolbar-->
                </div>
                <!--end::Card toolbar-->
            </div>
            <!--end::Card header-->
            <!--begin::Card body-->
            <form method="POST" action="#" class="needs-validation" enctype="multipart/form-data" id="xss-validation">
                <div class="card-body">
                    <div class="row">

                        <div class="form-group col-md-6 mb-3">
                            <!--begin::Wrapper-->
                            <div class="mb-1">
                                <!--begin::Label-->
                                <label class="form-label fw-bolder text-dark fs-6">Nama</label>
                                <!--end::Label-->
                                <!--begin::Input wrapper-->
                                <div class="position-relative mb-3">
                                    <input type="name" name="name" class="form-control form-control-lg form-control-solid" autocomplete="off" value="{{ isset($data) ? $data->name : '' }}"/>
                                    @error('name')
                                    <p style="font-size: 12px;" class="mb-0 text-danger mt-1 font-italic font-weight-bold">{{$message}} !</p>
                                    @enderror
                                </div>
                                <!--end::Input wrapper-->
                            </div>
                            <!--end::Wrapper-->
                        </div>
                
                        <div class="form-group col-md-6 mb-3">
                            <!--begin::Wrapper-->
                            <div class="mb-1">
                                <!--begin::Label-->
                                <label role="guard_name" class="form-label fw-bolder text-dark fs-6">Nama Penjaga</label>
                                <!--end::Label-->
                                <!--begin::Input wrapper-->
                                <div class="position-relative mb-3">
                                    <input type="text" name="guard_name" class="form-control form-control-lg form-control-solid" autocomplete="off" value="{{ isset($data) ? $data->guard_name : '' }}"/>
                                    @error('guard_name')
                                    <p style="font-size: 12px;" class="mb-0 text-danger mt-1 font-italic font-weight-bold">{{$message}} !</p>
                                    @enderror
                                </div>
                                <!--end::Input wrapper-->
                            </div>
                            <!--end::Wrapper-->
                        </div>

                    </div>
                </div>
                <div class="card-footer d-flex justify-content-between">
                    <a href="{{ route($route.'index') }}" class="btn btn-secondary">Kembali</a>
                </div>
            </form>
            <!--end::Card body-->
        </div>
        <!--end::Card-->
    </div>
    <!--end::Container-->
</div>
@endsection
