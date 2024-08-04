import ProjectsSideBar from './components/ProjectsSideBar'
import NoProjectSelected from './components/NoProjectSelected';
import { useState } from 'react';
import NewProject from './components/NewProject';
import SelectedProject from './components/SelectedProject'
function App() {
  const [projectsState, setprojectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  })

  function handleStartAddProject() {
    setprojectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    })
  }
  function handleAddProject(projectData) {
    const newProject = {
      ...projectData,
      id: Math.random()
    }
    setprojectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }
  function handleCancelAddProject() {
    setprojectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      }
    })
  }
  function handleSelectProject(id) {
    setprojectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id,
      }
    })
  }
  function handleDeleteProject() {
    setprojectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId)
      }
    })
  }
  function handleAddTasks(text) {
    setprojectsState((prevState) => {
      const taskId = Math.random()
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId
      }

      return {
        ...prevState,
        // selectedProjectId: undefined,
        tasks: [...prevState.tasks, newTask]

      }
    })

  }
  function handleDeleteTasks(id) {
    setprojectsState((prevState) => {
      return {
        ...prevState,
        // selectedProjectId: undefined,
        tasks: prevState.tasks.filter((task) => task.id !== id)
      }
    })
  }


  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId)
  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject} onAddTasks={handleAddTasks} onDeleteTasks={handleDeleteTasks} tasks={projectsState.tasks} />;
  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  return (
    <>
      <main className='h-screen my-8 flex gap-8'>
        <ProjectsSideBar onStartAddProject={handleStartAddProject} projects={projectsState.projects} onSelectProject={handleSelectProject} selectedProjectId={projectsState.selectedProjectId} />
        {content}
      </main>

    </>
  );
}

export default App;
