import { Autobind } from '../decorators/autobind';
import { Dragable } from '../models/drag-drop';
import { Project } from '../models/project';
import { Component } from './base-component';

//Project Item class
export class ProjectItem
  extends Component<HTMLUListElement, HTMLLinkElement>
  implements Dragable
{
  private project: Project;

  get persons() {
    if (this.project.people === 1) {
      return '1 person';
    }

    return `${this.project.people} persons`;
  }

  constructor(hostId: string, project: Project) {
    super('single-project', hostId, false, project.id);
    this.project = project;

    this.configure();
    this.renderContent();
  }

  @Autobind
  dragStartHandler(event: DragEvent): void {
    event.dataTransfer?.setData('text/plain', this.project.id);
    event.dataTransfer!.effectAllowed = 'move';
  }

  @Autobind
  dragEndHandler(_: DragEvent): void {
    console.log('dragend');
  }

  configure(): void {
    this.element.addEventListener('dragstart', this.dragStartHandler);
    this.element.addEventListener('dragend', this.dragEndHandler);
  }

  renderContent(): void {
    this.element.querySelector('h2')!.textContent = this.project.title;
    this.element.querySelector('h3')!.textContent = this.persons + ' assigned';
    this.element.querySelector('p')!.textContent = this.project.description;
  }
}
