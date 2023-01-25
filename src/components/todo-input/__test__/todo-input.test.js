import { render, screen } from "@testing-library/react"
import TodoInput from "../todo-input"
import userEvent from "@testing-library/user-event"



const mockedAddTodo=()=>{};  // 3. it sahte bir fonksiyon render olmadigi icin yaptik
// aptodonun hata vermesini engelledik


//1
it("Your render the button as disabled if textbox contains no char" , ()=>{
    render  (<TodoInput/>)
    const buttonEl = screen.getByRole("button")
    expect (buttonEl).toBeDisabled();  //butonu disabled hale getirdik inputtaki
})

//2
it("should render the button as enabled if textbox contains some chars",()=>{
    render(<TodoInput/>)
    const buttonEl=screen.getByRole("button")
    const inputEl = screen.getByRole("textbox")
    
    userEvent.type(inputEl, "hello react")
    expect(inputEl.value).toBe("hello react")
    expect(buttonEl).toBeEnabled()
    })

    //3

    it("input should be empty when click the button" , ()=>{  //inputun bos olup olmadigina baktik
        render(<TodoInput addTodo={mockedAddTodo} />)
        const buttonEl=screen.getByRole("button")
        const inputEl = screen.getByRole("textbox")
        
        userEvent.type(inputEl, "hello react")
        userEvent.click(buttonEl)
        expect (inputEl).toHaveFocus();
        expect (inputEl.value).toBe("")
        
        })