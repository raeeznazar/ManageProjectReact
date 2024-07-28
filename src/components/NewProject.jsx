import Input from "./Input"
export default function NewProject() {
    return <div>
        <menu>
            <li><button>Cancel</button></li>
            <li><button>Save</button></li>
        </menu>
        <div>
            <p>
                <Input label="Title" />
                <Input label="Description" />
                <Input label="Due Date" />
            </p>

        </div>
    </div>
}