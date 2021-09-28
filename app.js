const app = Vue.createApp({
 data() {
     return {
        firstInput: '',
        secondInput: '',
        confirmedName: '',
        confirmednameInput: '',
        
     };
 },
 methods: {
     confirmedInputfirst(){
       this.confirmedName = this.firstInput;
     },
     confirmedInputsecond(){
        this.confirmednameInput = this.secondInput;
      },
      submitForm(){
       alert('Your Form Is Submitted!');
    },
    setfirstInput(event){
         this.firstInput = event.target.value;
     },
     setsecondInput(event){
        this.secondInput = event.target.value;
    },
 }
});
app.mount('#events');