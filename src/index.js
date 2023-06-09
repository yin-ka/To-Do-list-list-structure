import _ from 'lodash';
import './style.css';
const todos = [
    { index: 1, description: 'Learn software development skill', completed: true },
    { index: 2, description: 'Get a job', completed: false },
    { index: 3, description: 'Upgrade my system', completed: false },
  ];
  
  const taskContainer = document.querySelector('.body_cont');
  
  const tasks = todos.map((todo) => `
      <div class="todos">
        <div class="task"><input type="checkbox" id="demoCheckbox" name="checkbox" value="1">
            <label for="demoCheckbox">${todo.description}</label>
        </div>
        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
      </div>
      `).join('');
  
  taskContainer.innerHTML = tasks;