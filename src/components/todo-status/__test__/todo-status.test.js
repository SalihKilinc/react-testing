import { render,  screen } from "@testing-library/react"

import TodoStatus from "../todo-status"


//counter gecirdik countera burda verilen deger ve screen icinde olan sayinin eslesmesi gerekir
it("render singular job text" , ()=>{
    render(<TodoStatus count={1}/>)
    const statusEl = screen.getByText(/1 job left/i)
    expect(statusEl).toBeInTheDocument()
})

it("render plural job text" , ()=>{
    render(<TodoStatus count={10}/>);
    const statusEl = screen.getByText(/10 jobs left/i);
    expect(statusEl).toBeInTheDocument()
})


