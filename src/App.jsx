import ProjectsSideBar from './components/ProjectsSideBar'
import NoProjectSelected from './components/NoProjectSelected';
import { useState } from 'react';
import NewProject from './components/NewProject';
function App() {
  const [projectsState, setprojectsState] = useState({
    selectedProjectId: undefined,
    projects: []
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
        projects: [...prevState.projects, newProject]
      }
    })
  }
  console.log(projectsState);
  let content;
  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  return (
    <>
      <main className='h-screen my-8 flex gap-8'>
        <ProjectsSideBar onStartAddProject={handleStartAddProject} />
        {content}
      </main>

    </>
  );
}

export default App;
