import { render ,screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import TodoHeader from "../todo-header"


const MockTodoHeader = ({title}) => {   // mock yapisi browserrouter hatasini ortadn kaldirmak icin kurulan feyk yapi

    return(
        <BrowserRouter>
        <TodoHeader title={title}/>
        </BrowserRouter>
    )
}
// title prop ile cagirdk cunku iki mock ayni title arar
// bos title yani dimanik title asgida bos birakarak aldik


//baslik elemanini test ediyoruz TodoHeader da olan
it("Should be rendered with given title", ()=>{
    render(<MockTodoHeader title="Hello World"/>)
    const headerEl=screen.getByText(/hello world/i)
    expect (headerEl).toBeInTheDocument()
})

//baslik elemanini test ediyoruz TodoHeader da olan
it("Should be rendered default title", ()=>{
    render(<MockTodoHeader title=""/>)
    const headerEl=screen.getByText(/todo app/i)
    expect (headerEl).toBeInTheDocument()
})