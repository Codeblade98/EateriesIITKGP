var total_cost=0;
document.getElementById("sum").innerText=sum;




function onClickAdd(item_cost) {
    total_cost+=item_cost;
    document.getElementById("sum").innerText=total_cost;
}

function onClickRemove(item_cost) {
    if (total_cost>=item_cost) {
        total_cost-=item_cost;
        document.getElementById("sum").innerText=total_cost;
    }
}

const num=document.querySelector(' .bill b');
num.innerHTML=' '+total_cost;
