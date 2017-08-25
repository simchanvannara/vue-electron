<template>
  <div id="wrapper">
    <div>
      <input type="text" v-model="testing">
    </div>
    <br>    
    <button class="btn btn-lg btn-primary btn-block btn-signin" type="submit" @click="send()">send</button>
    <br>
    <br>
    <router-link to="/">Back</router-link>
    <br>
    <br>
    <button @click="getData()"> get</button>
    <br>
    <br>
    <ul id="example-1">
      <li v-for="item in items">
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script>

  export default {
    name: 'chat-page',
    data () {
      return {
        testing: '',
        items: {}
      }
    },
    methods: {
      getData () {
        console.log(1111)
        this.$socket.emit('chat-send', 'test')
        this.$http.get('http://localhost:3030/chats').then((res) => {
          this.items = res.body
          console.log('111111111', this.items)
        }).catch((e) => {
          console.log(e)
        })
      },
      send () {
        console.log(this.text)
        var postData = {
          text: this.text,
          user_id: '1'
        }
        console.log(postData)
        this.$http.post('http://localhost:3030/chats', postData).then((res) => {
          console.log(res)
        }).catch((e) => {
          console.log(e)
        })
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }

  #wrapper {
    background:
      radial-gradient(
        ellipse at top left,
        rgba(255, 255, 255, 1) 40%,
        rgba(229, 229, 229, .9) 100%
      );
    height: 100vh;
    padding: 60px 80px;
    width: 100vw;
  }

  #logo {
    height: auto;
    margin-bottom: 20px;
    width: 420px;
  }

  main {
    display: flex;
    justify-content: space-between;
  }

  main > div { flex-basis: 50%; }

  .left-side {
    display: flex;
    flex-direction: column;
  }

  .welcome {
    color: #555;
    font-size: 23px;
    margin-bottom: 10px;
  }

  .title {
    color: #2c3e50;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 6px;
  }

  .title.alt {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .doc p {
    color: black;
    margin-bottom: 10px;
  }

  .doc button {
    font-size: .8em;
    cursor: pointer;
    outline: none;
    padding: 0.75em 2em;
    border-radius: 2em;
    display: inline-block;
    color: #fff;
    background-color: #4fc08d;
    transition: all 0.15s ease;
    box-sizing: border-box;
    border: 1px solid #4fc08d;
  }

  .doc button.alt {
    color: #42b983;
    background-color: transparent;
  }
</style>
