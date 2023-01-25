import { render, screen } from "@testing-library/react"
import TodosPage from "../todos-page"
import userEvent from "@testing-library/user-event"



// buton ekleme yaptimi diye konhtrol ettik
describe("adding functionalty" , ()=>{
    it("should render new task in the lis" , ()=>{
 render(<TodosPage/>)
 const buttonEl=screen.getByRole("button")
 const inputEl=screen.getByRole("textbox")
 userEvent.type(inputEl, "hello react")
 userEvent.click(buttonEl)

 const listItemEl=screen.getByText(/hello react/i)
 expect (listItemEl).toBeInTheDocument()
    })

})