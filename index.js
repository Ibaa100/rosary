const buttons=document.querySelectorAll('.btn');
const counters=document.querySelectorAll('.counter');
const countersZero=document.querySelectorAll('.counterzero');
const zero=document.querySelector('.zero')
const[counter1,counter2,counter3,counter4]=[...counters]
const[counterzero1,counterzero2,counterzero3,counterzero4]=[...countersZero]
buttons.forEach( (button)=>{
   button.addEventListener('click',e=>{
    const ele=e.target.innerHTML;
    if(ele==='سبحان الله'){
       counter1.innerHTML= parseInt(counter1.innerHTML)+1;
    }
    else if(ele==='الحمد لله'){
        counter2.innerHTML=parseInt(counter2.innerHTML)+ 1;

    }
    else if(ele==='لا إله إلا الله'){
        counter3.innerHTML=parseInt(counter3.innerHTML)+ 1;

    }else{
        counter4.innerHTML=parseInt(counter4.innerHTML)+ 1;

    }
   })
}
)
countersZero.forEach(element => {
    element.addEventListener('click',e=>{
        const ele=e.target.id;
        if(ele==='counterzero1'){
            counter1.innerHTML=0; 
        }else if(ele==='counterzero2'){
            counter2.innerHTML=0; 
        }else if(ele==='counterzero3'){
            counter3.innerHTML=0; 
        }else {
            counter4.innerHTML=0;
        }
    })
});

zero.addEventListener('click',()=>{
    counters.forEach((ele)=>{
        ele.innerHTML=0;
    })
})
