import { useRef } from "react"
import Input from "./Input"
import Modal from "./Modal"
export default function NewProject({ onAdd, onCancel }) {
    const title = useRef()
    const description = useRef()
    const dueDate = useRef()
    const modal = useRef()
    function handleSave() {
        const enteredTitle = title.current.value
        const enteredDescription = description.current.value
        const enteredDateDate = dueDate.current.value
        //Validation
        if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDateDate.trim() === '') {
            modal.current.open();
            return;
        }
        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDateDate
        });
    }
    return (
        <>
            <Modal ref={modal} buttonCaption="Okay" >
                <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
                <p className="text-stone-600 mb-4">Ooops.. looks like you forgot to enter a value</p>
                <p className="text-stone-600 mb-4">Please make sure you provide a valid alue for every input field</p>
            </Modal>

            <div className="w-[35rem] mt-16">
                <menu className="flex item-center justify-end gap-4 my-4">
                    <li><button onClick={onCancel} className=" px-6 py-2  text-stone-800 hover:text-stone-950">Cancel</button></li>
                    <li><button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button></li>
                </menu>
                <div>
                    <Input type="text" ref={title} Label="Title" />
                    <Input ref={description} Label="Description" textarea />
                    <Input type="date" ref={dueDate} Label="Due Date" />
                </div>
            </div>
        </>
    )
}