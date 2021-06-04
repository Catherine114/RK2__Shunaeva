Vue.component('task',{
    props: ['data'],
    data() {
      return {
      }
    },
    methods: {
      task_delete(){
        this.$emit('task_done')
      }
    },
    template: `
    <div class="task">
      <div>
        <h3 class="task__title">{{data.title}}</h3>
        <p v-if="data.desc!=''" class="task__desc">{{data.desc}}</p>
      </div>
      <button class="task__delete" @click="task_delete()">❌</button>
    </div>`
  });
  
  var vue = new Vue({
    el: '#app',
    data: {
      string: 'asdasda',
      new_task: {
        title: '',
        desc: ''
      },
      tasks : [
        {
          title: '"Мастер и Маргарита" Михаил Булгаков',
          desc: 'Прочитанно год назад',
        },
        {
          title: 'Прочитать книгу "Vue.js в действии"',
          desc: '',
        },
        {
            title: '"Убийство в «Восточном экспрессе»" Агата Кристи',
            desc: 'Прочитать в июле',
          }
      ]
    },
    methods: {
      add_task(){
        if(this.new_task.title != ''){
          this.tasks.push({
            title: this.new_task.title,
            desc: this.new_task.desc
          });
          this.new_task.title='';
          this.new_task.desc='';
        }
      },
      delete_task(id){
        this.tasks.splice(id,1);
      }
    }
  });

if (!localStorage.theme) localStorage.theme = 'light'
document.body.className = localStorage.theme
themeButton.innerText = document.body.classList.contains("dark") ? "Светлая тема" : "Темная тема"

themeButton.onclick = () => {
  document.body.classList.toggle("dark")
  themeButton.innerText = document.body.classList.contains("dark") ? "Светлая тема" : "Темная тема"
  localStorage.theme = document.body.className || 'light'
}