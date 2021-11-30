<template>


    <div>
     Redirecting...

      
    </div>
      

</template>

<script>

export default {
  name: 'Redirect2Url',
  data() {
    return {
      lurl:"",
      kurl:""

    }
  },
  methods: {

    async fetchTasks(kurl) {
        
        const res = await fetch('https://kurl-server.herokuapp.com/getlurl?kurl='+kurl["kurl"], {
          method:'GET'
        })
        const data = await res.json()
        window.location.href = await data["lurl"]
   
       
        
    },
   
  },
      
    async created() {
        var kurl = this.$route.params
        console.log(kurl)
        if(kurl['kurl'] != 'undefined'){
           await this.fetchTasks(kurl)
        }
        else{
          console.log('errrror '+this.$route.params)
        }
    },
       
  
}
</script>

