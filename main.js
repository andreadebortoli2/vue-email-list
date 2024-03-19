// console.log('test');

/* 
--Descrizione:
- Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail 
- generare 10 indirizzi email 
- e stamparli in pagina all'interno di una lista.
--Bonus
- Far comparire gli indirizzi email solamente quando sono stati tutti generati. */

const { createApp } = Vue

createApp({
    data() {
        return {
            emailAddresses: [],
        }
    },
    methods: {
        async generateTenEmailAddresses() {
            let addressesList = [];
            for (let i = 0; i < 10; i++) {
                addressesList.push(axios
                    .get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {
                        // console.log(response.data.response);
                        let address = response.data.response;
                        return address;
                    }));
            };
            Promise.all(addressesList).then((addresses) => {
                // console.log(addressesList);
                // console.log(addresses);
                this.emailAddresses = addresses;
            });
        },
    },
    created() {
        // console.log(this.emailAddresses);
        this.generateTenEmailAddresses();
        // console.log(this.emailAddresses);
    },
}).mount('#app')