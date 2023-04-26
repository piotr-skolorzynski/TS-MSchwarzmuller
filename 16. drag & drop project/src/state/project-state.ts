import { Project, ProjectStatus } from '../models/project';

//Project State Management
type Listener<T> = (items: T[]) => void;

class State<T> {
  protected listeners: Listener<T>[] = [];

  addListener(listenerFn: Listener<T>) {
    this.listeners.push(listenerFn);
  }
}

export class ProjectState extends State<Project> {
  private projects: Project[] = [];
  private static instane: ProjectState;

  private constructor() {
    super();
  }

  static getInstance() {
    if (this.instane) {
      return this.instane;
    }

    this.instane = new ProjectState();
    return this.instane;
  }

  addProject(title: string, description: string, numOfPeople: number) {
    const newProject = new Project(
      crypto.randomUUID(),
      title,
      description,
      numOfPeople
    );
    this.projects.push(newProject);
    this.updateListeners();
  }

  moveProject(projectId: string, newStatus: ProjectStatus) {
    const project = this.projects.find((prj) => prj.id === projectId);
    if (project && project.status !== newStatus) {
      project.status = newStatus;
      this.updateListeners();
    }
  }

  private updateListeners() {
    for (const listenerFn of this.listeners) {
      listenerFn(this.projects.slice());
    }
  }
}

export const projectState = ProjectState.getInstance();
