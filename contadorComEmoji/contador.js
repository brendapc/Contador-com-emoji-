function contar(){
    inicio = document.querySelector('input#inicio').value
    fim = document.querySelector('input#fim').value
    passo = document.querySelector('input#passo').value
    p = document.querySelector('p#res')

    if(inicio<=0 || fim <0 || passo <=0){
        p.innerHTML = '[ERRO] Faltam dados'
    }
    else{
        ini = Number(inicio)
        fi = Number(fim)
        pas = Number(passo)
        if(ini<fi){
            for(i=ini;i<=fi;i+=pas){
                p.innerHTML += `${i} \u{1F449} `
            }
            
        }else{
            for(i=ini;i>fi;i-=pas){
                p.innerHTML += `${i} \u{1F449} `
            }
        }
        p.innerHTML += '\u{1F3C1}'
    }
}