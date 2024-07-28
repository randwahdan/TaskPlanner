import { Component, computed, inject, signal } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import { Task } from '../task.model';
import { TasksService } from '../../tasks.service';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
})
export class TasksListComponent {
  private tasksServices = inject(TasksService);
  private selectedFilter = signal<string>('all');
  tasks = computed(() =>{
    switch(this.selectedFilter()) {
      case 'all':
        return this.tasksServices.allTasks();
        case 'open':
          return this.tasksServices
          .allTasks()
          .filter(task => task.status === 'OPEN');
        case 'in-progress':
          return this.tasksServices
          .allTasks()
          .filter(task => task.status === 'IN_PROGRESS');
        case 'done':
            return this.tasksServices
            .allTasks()
            .filter(task => task.status === 'DONE');
            default:
            return this.tasksServices.allTasks();
    }
  });
  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
