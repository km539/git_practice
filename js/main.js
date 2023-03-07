// $(document).ready(function(){
//     $('.filterItem').click(function(){
//         const value = $(this).attr('data-filter')
//         if(value === )
//     })
// })
function hide(array) {
    array.forEach(function (id) {
        id.style.display = 'none';
    })
}
function show(array) {
    array.forEach(function (id) {
        id.style.display = 'block';
    })
}

document.querySelectorAll('.filterItem').forEach(btn => {
    let value = btn.getAttribute('data-filter');
    btn.addEventListener("click", function(id){
        if(value === "all"){
            const all = document.querySelectorAll('.postBox')
            show(all);
        }else{
            const all = document.querySelectorAll(`.postBox`)
            hide(all);
            const other = document.querySelectorAll(`.${value}`)
            show(other);
        }
    })
})