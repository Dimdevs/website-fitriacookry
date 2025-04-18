"use strict";
var KTCreateCampaign = (function () {
    var e,
        a,
        t,
        n,
        o,
        i,
        l = [];
    return {
        init: function () {
            (e = document.querySelector("#kt_modal_create_campaign")) &&
                (new bootstrap.Modal(e),
                (a = document.querySelector(
                    "#kt_modal_create_campaign_stepper"
                )),
                (t = document.querySelector(
                    "#kt_modal_create_campaign_stepper_form"
                )),
                (n = a.querySelector('[data-kt-stepper-action="submit"]')),
                (o = a.querySelector('[data-kt-stepper-action="next"]')),
                (i = new KTStepper(a)).on("kt.stepper.changed", function (e) {
                    4 === i.getCurrentStepIndex()
                        ? (n.classList.remove("d-none"),
                          n.classList.add("d-inline-block"),
                          o.classList.add("d-none"))
                        : 5 === i.getCurrentStepIndex()
                        ? (n.classList.add("d-none"), o.classList.add("d-none"))
                        : (n.classList.remove("d-inline-block"),
                          n.classList.remove("d-none"),
                          o.classList.remove("d-none"));
                }),
                i.on("kt.stepper.next", function (e) {
                    console.log("stepper.next");
                    var a = l[e.getCurrentStepIndex() - 1];
                    a
                        ? a.validate().then(function (a) {
                              console.log("validated!"),
                                  "Valid" == a
                                      ? e.goNext()
                                      : Swal.fire({
                                            text: "Sorry, looks like there are some errors detected, please try again.",
                                            icon: "error",
                                            buttonsStyling: !1,
                                            confirmButtonText: "Ok, got it!",
                                            customClass: {
                                                confirmButton: "btn btn-light",
                                            },
                                        }).then(function () {});
                          })
                        : (e.goNext(), KTUtil.scrollTop());
                }),
                i.on("kt.stepper.previous", function (e) {
                    console.log("stepper.previous"),
                        e.goPrevious(),
                        KTUtil.scrollTop();
                }),
                n.addEventListener("click", function (e) {
                    e.preventDefault(),
                        (n.disabled = !0),
                        n.setAttribute("data-kt-indicator", "on"),
                        setTimeout(function () {
                            n.removeAttribute("data-kt-indicator"),
                                (n.disabled = !1),
                                i.goNext();
                        }, 2e3);
                }),
                (function () {
                    var e = document.querySelector(
                            "#kt_modal_create_campaign_age_slider"
                        ),
                        a = document.querySelector(
                            "#kt_modal_create_campaign_age_min"
                        ),
                        n = document.querySelector(
                            "#kt_modal_create_campaign_age_max"
                        );
                    noUiSlider.create(e, {
                        start: [18, 40],
                        connect: !0,
                        range: { min: 13, max: 80 },
                    }),
                        e.noUiSlider.on("update", function (e, t) {
                            t
                                ? (n.innerHTML = Math.round(e[t]))
                                : (a.innerHTML = Math.round(e[t]));
                        });
                    var o = new Tagify(
                            document.querySelector(
                                "#kt_modal_create_campaign_location"
                            ),
                            {
                                delimiters: null,
                                templates: {
                                    tag: function (e) {
                                        const a =
                                            hostUrl +
                                            "media/flags/" +
                                            e.value
                                                .toLowerCase()
                                                .replace(/\s+/g, "-") +
                                            ".svg";
                                        try {
                                            return `<tag title='${
                                                e.value
                                            }' contenteditable='false' spellcheck="false" class='tagify__tag ${
                                                e.class ? e.class : ""
                                            }' ${this.getAttributes(
                                                e
                                            )}>\n                                <x title='remove tag' class='tagify__tag__removeBtn'></x>\n                                <div class="d-flex align-items-center">\n                                    ${
                                                e.code
                                                    ? `<img onerror="this.style.visibility = 'hidden'" class="w-25px rounded-circle me-2" src='${a}' />`
                                                    : ""
                                            }\n                                    <span class='tagify__tag-text'>${
                                                e.value
                                            }</span>\n                                </div>\n                            </tag>`;
                                        } catch (e) {}
                                    },
                                    dropdownItem: function (e) {
                                        const a =
                                            hostUrl +
                                            "media/flags/" +
                                            e.value
                                                .toLowerCase()
                                                .replace(/\s+/g, "-") +
                                            ".svg";
                                        try {
                                            return `<div class='tagify__dropdown__item ${
                                                e.class ? e.class : ""
                                            }'>\n                                    <img onerror="this.style.visibility = 'hidden'" class="w-25px rounded-circle me-2"\n                                         src='${a}' />\n                                    <span>${
                                                e.value
                                            }</span>\n                                </div>`;
                                        } catch (e) {}
                                    },
                                },
                                enforceWhitelist: !0,
                                whitelist: [
                                    { value: "Argentina", code: "AR" },
                                    {
                                        value: "Australia",
                                        code: "AU",
                                        searchBy: "beach, sub-tropical",
                                    },
                                    { value: "Austria", code: "AT" },
                                    { value: "Brazil", code: "BR" },
                                    { value: "China", code: "CN" },
                                    { value: "Egypt", code: "EG" },
                                    { value: "Finland", code: "FI" },
                                    { value: "France", code: "FR" },
                                    { value: "Germany", code: "DE" },
                                    { value: "Hong Kong", code: "HK" },
                                    { value: "Hungary", code: "HU" },
                                    { value: "Iceland", code: "IS" },
                                    { value: "India", code: "IN" },
                                    { value: "Indonesia", code: "ID" },
                                    { value: "Italy", code: "IT" },
                                    { value: "Jamaica", code: "JM" },
                                    { value: "Japan", code: "JP" },
                                    { value: "Jersey", code: "JE" },
                                    { value: "Luxembourg", code: "LU" },
                                    { value: "Mexico", code: "MX" },
                                    { value: "Netherlands", code: "NL" },
                                    { value: "New Zealand", code: "NZ" },
                                    { value: "Norway", code: "NO" },
                                    { value: "Philippines", code: "PH" },
                                    { value: "Singapore", code: "SG" },
                                    { value: "South Korea", code: "KR" },
                                    { value: "Sweden", code: "SE" },
                                    { value: "Switzerland", code: "CH" },
                                    { value: "Thailand", code: "TH" },
                                    { value: "Ukraine", code: "UA" },
                                    { value: "United Kingdom", code: "GB" },
                                    { value: "United States", code: "US" },
                                    { value: "Vietnam", code: "VN" },
                                ],
                                dropdown: {
                                    enabled: 1,
                                    classname: "extra-properties",
                                },
                            }
                        ),
                        l = o.settings.whitelist.slice(0, 2);
                    o.addTags(l),
                        $("#kt_modal_create_campaign_datepicker").flatpickr({
                            altInput: !0,
                            enableTime: !0,
                            altFormat: "F j, Y H:i",
                            dateFormat: "Y-m-d H:i",
                            mode: "range",
                        }),
                        new Dropzone("#kt_modal_create_campaign_files_upload", {
                            url: "https://www.instagram.com/bagelenbythefitriacookeryscripts/void.php",
                            paramName: "file",
                            maxFiles: 10,
                            maxFilesize: 10,
                            addRemoveLinks: !0,
                            accept: function (e, a) {
                                "wow.jpg" == e.name
                                    ? a("Naha, you don't.")
                                    : a();
                            },
                        });
                    const r = document.querySelector(
                            "#kt_modal_create_campaign_duration_all"
                        ),
                        c = document.querySelector(
                            "#kt_modal_create_campaign_duration_fixed"
                        ),
                        s = document.querySelector(
                            "#kt_modal_create_campaign_datepicker"
                        );
                    [r, c].forEach((e) => {
                        e.addEventListener("click", (a) => {
                            e.classList.contains("active") ||
                                (r.classList.toggle("active"),
                                c.classList.toggle("active"),
                                c.classList.contains("active")
                                    ? s.nextElementSibling.classList.remove(
                                          "d-none"
                                      )
                                    : s.nextElementSibling.classList.add(
                                          "d-none"
                                      ));
                        });
                    });
                    var d = document.querySelector(
                            "#kt_modal_create_campaign_budget_slider"
                        ),
                        u = document.querySelector(
                            "#kt_modal_create_campaign_budget_label"
                        );
                    noUiSlider.create(d, {
                        start: [5],
                        connect: !0,
                        range: { min: 1, max: 500 },
                    }),
                        d.noUiSlider.on("update", function (e, a) {
                            (u.innerHTML = Math.round(e[a])),
                                a && (u.innerHTML = Math.round(e[a]));
                        }),
                        document
                            .querySelector(
                                "#kt_modal_create_campaign_create_new"
                            )
                            .addEventListener("click", function () {
                                t.reset(), i.goTo(1);
                            });
                })(),
                l.push(
                    FormValidation.formValidation(t, {
                        fields: {
                            campaign_name: {
                                validators: {
                                    notEmpty: {
                                        message: "App name is required",
                                    },
                                },
                            },
                            avatar: {
                                validators: {
                                    file: {
                                        extension: "png,jpg,jpeg",
                                        type: "image/jpeg,image/png",
                                        message:
                                            "Please choose a png, jpg or jpeg files only",
                                    },
                                },
                            },
                        },
                        plugins: {
                            trigger: new FormValidation.plugins.Trigger(),
                            bootstrap: new FormValidation.plugins.Bootstrap5({
                                rowSelector: ".fv-row",
                                eleInvalidClass: "",
                                eleValidClass: "",
                            }),
                        },
                    })
                ));
        },
    };
})();
KTUtil.onDOMContentLoaded(function () {
    KTCreateCampaign.init();
});
