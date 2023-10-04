// function 
function idCode(id_code){ 
    let id = id_code.toString()
    function customerGender(id){
        if (id.length === 11){
            // returns the gender
            let gender
            if (id[0] % 2 === 0){
                gender = 'female'
                return gender
            } else{
                gender = 'male'
                return gender
            } 
        } else {
            return 'Something went wrong'
        } 
    }

    function customerBirthyear(id){
        if (customerGender != 'Something went wrong'){
            // returns the birthyear
            let birthyear = id.slice(1, 3);
            return birthyear
        } else {
            return 'Something went wrong'
        } 
    } 

    function customerBirthmonth(id){
        if (customerGender != 'Something went wrong'){
            // returns the birthmonth
            let birthmonth = id.slice(3, 5);
            if (birthmonth === "01"){
                birthmonth = "January"
            } 
            else if (birthmonth === "02"){
                birthmonth = "February"
            }
            else if (birthmonth === "03"){
                birthmonth = "March"
            }
            else if (birthmonth === "04"){
                birthmonth = "April"
            }
            else if (birthmonth === "05"){
                birthmonth = "May"
            }
            else if (birthmonth === "06"){
                birthmonth = "June"
            }
            else if (birthmonth === "07"){
                birthmonth = "July"
            }
            else if (birthmonth === "08"){
                birthmonth = "Ausgust"
            }
            else if (birthmonth === "09"){
                birthmonth = "September"
            }
            else if (birthmonth === "10"){
                birthmonth = "October"
            }
            else if (birthmonth === "11"){
                birthmonth = "November"
            }
            else if (birthmonth === "12"){
                birthmonth = "December"
            }
            return birthmonth
        } 
        else {
            return 'Something went wrong'
        } 
    }

    function customerBirthday(id){
        if (customerGender != 'Something went wrong'){
            // returns the birthday
            birthday = id.slice(5, 7);
            return birthday
        } else {
            return 'Something went wrong'
        } 
    } 

    function customerBirthplace(id){
        if (customerGender != 'Something went wrong'){
            // returns the birthplace
            birthplace = id.slice(7, 10); 
            if (birthplace < 11){
                return "Kuressaare haigla"
            } 
            else if (birthplace < 20){
                return "Tartu Ülikooli Naistekliinik"
            }
            else if (birthplace < 151){
                return "Ida-Tallinna keskhaigla or Pelgulinna sünnitusmaja"
            } 
            else if (birthplace < 161){
                return "Keila haigla"
            } 
            else if (birthplace < 221){
                return "Rapla haigla, Loksa haigla or Hiimunaa haigla (Kärdla)"
            } 
            else if (birthplace < 271){
                return "Ida-Viru keskhaigla (Kohtla-Järve, endine Jõhvi)"
            }
            else if (birthplace < 371){
                return "Maarjamõisa kliinikum (Tartu) or Jõgeva haigla"
            } 
            else if (birthplace < 421){
                return "Narva haigla"
            } 
            else if (birthplace < 471){
                return "Pärnu haigla"
            } 
            else if (birthplace < 491){
                return "Haapsalu haigla"
            } 
            else if (birthplace < 520){
                return "Järvamaa haigla (Paide)"
            } 
            else if (birthplace < 571){
                return "Rakvere haigla or Tapa haigla"
            } 
            else if (birthplace < 601){
                return "Valga haigla"
            } 
            else if (birthplace < 651){
                return "Viljandi haigla"
            } 
            else if (birthplace < 701){
                return "Lõuna-Eesti haigla (Võru) or Põlva haigla"
            } 
        } else {
            return 'Something went wrong'
        } 
    } 

    function customerOrder(id){
        if (customerGender != 'Something went wrong'){ 
            // returns the order number
        birthorder = id.slice(9, 10);
            return birthorder
        } else {
            return 'Something went wrong'
        }
    }

    function customerControlcode(id){
        if (customerGender != 'Something went wrong'){
            // returns the idcode control code
            birthControlcode = id.slice(10, 11);
            const first_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];
            const second_array = [3, 4, 5, 6, 7, 8, 9, 1, 2, 3];
            let id_array = []
            for (let i = 0; i < 10; i++){
                id_array.push(Number(id[i]));
            }
            let control = 0
            for (let i = 0; i < 10; i++){
                control += id_array[i] * second_array[i];  
            } 
            if (control % 11 === 10) {
                control = 0;
                for (let i = 0; i < 10; i++){
                    control += id_array[i] * second_array[i];  
                } 
                return control % 11;
        } else {
            return control % 11;
        } 
    }  
    }
    let gender = customerGender(id)
    let birthyear = customerBirthyear(id)
    /*let birthmonth = customerBirthmonth(id)
    let birthday = customerBirthday(id)
    let birthplace = customerBirthplace(id)
    let birthorder = customerOrder(id)
    let control = customerOrder(id)
    */

    return func = `The customer is a ${gender} they were born in das aasta ${birthyear} `  
    //console.log('The customer is a ' + (customerGender(id)) + '.')
    //console.log("They were born in the year '" + (customerBirthyear(id)) + '.')
    //console.log('They were born in ' + (customerBirthmonth(id)) + '.')
    //console.log('Their birthdate is ' + (customerBirthday(id)) + '.')
    //console.log('They were born in ' + (customerBirthplace(id)) + '.')
    //console.log('They were ' + (customerOrder(id)) + '. person from their gender to be born on that day')
    //console.log('The control number of their id-code is ' + (customerControlcode(id)) + '.')
    return returnfunc
}
console.log(idCode(50609212790))
module.exports ={
    idCode
} 
