const form= document.getElementById('form-atividade');
const imgAprovado= `<img src="./images/aprovado.png" alt="emoji celebrado" />`
const imgReprovado= `<img src="./images/reprovado.png" alt="emoji triste" />`
const atividades=[];
const notas=[];
const spanAprovado='<span class="resultado  aprovado">Aprovado</span>';
const spanReprovado='<span class="resultado  reprovado">Reprovado</span>';
const notaMinima= parseFloat(prompt("Digite a nota mínima: "))

let linhas='';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionarlinha();
    atualizartabela();
    atualizarMediaFinal();
});

function adicionarlinha(){
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inpuNotaAtividade= document.getElementById('nota-atividade');
    if(atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade: ${inputNomeAtividade.value} já está inserida`)
    }else{
        atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inpuNotaAtividade.value));

    let linha = '<tr>';
    linha +=`<td>${inputNomeAtividade.value}</td> `;
    linha += ` <td>${inpuNotaAtividade.value}</td> `;
    linha += `<td>${inpuNotaAtividade.value >= notaMinima ? imgAprovado: imgReprovado }</td>`;
    linha += `</tr>`

    linhas += linha;
    }

    

    inputNomeAtividade.value='';
    inpuNotaAtividade.value='';

}
function atualizartabela(){
    const corpotabela=document.querySelector('tbody');
    corpotabela.innerHTML=linhas;
}
function atualizarMediaFinal(){
    const mediaFinal= calcularMedia();
    document.getElementById('mediaf').innerHTML=mediaFinal.toFixed(2);
    document.getElementById('mediaR').innerHTML= mediaFinal >= notaMinima ? spanAprovado : spanReprovado; 
    
}
function calcularMedia(){
    let somaDaNotas=0;

    for(let i=0; i< notas.length; i++){
        somaDaNotas+=notas[i];
    }

    return somaDaNotas/notas.length;

    
}