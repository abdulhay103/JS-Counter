//Grape the Field
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

//Create functionality
let count = 0;

btns.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        // console.log(e.currentTarget.classList);
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }else if(styles.contains('increase')){
            count++;
        }else{
            count = 0;
        }

        //Functionality For Text Color
        if(count<0){
            value.style.color = "red";
        }
        if(count>0){
            value.style.color = "Green"
        }
        if(count === 0){
            value.style.color = "#000"
        }
        value.textContent = count;
    })
})