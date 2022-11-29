import {iluminacionT, industriaT} from '../exports/data.js'
const containerIluminacion = document.querySelector('#card-iluminacion')
const containerIndustria = document.querySelector('#card-industria')

let fragment = '';

iluminacionT.forEach( elemet => {
    fragment +=`
    <div class="col-6 col-sm-6 col-md-4 col-lg-3">
        <div class="card-product">
                <img src="${elemet.img}" class="card-img-top" alt="Imagen De Lampara">
            <div class="card-body">
                 <h5 class="card-title text-center fw-light">${elemet.title}</h5>
            </div>
        </div>
    </div>
    `
})
industriaT.forEach( elemet => {
    fragment +=`
    <div class="col-6 col-sm-6 col-md-4 col-lg-3">
    <div class="card-product">
            <img src="${elemet.img}" class="card-img-top" alt="Imagen De Lampara">
        <div class="card-body">
             <h5 class="card-title text-center fw-light">${elemet.title}</h5>
        </div>
    </div>
</div>
    `
})
containerIndustria.innerHTML = fragment;
