import { useState } from "react"


function App() {
  const [name, setName] = useState("")
  const [title, setTitle] = useState("")
  const [message, seMessage] = useState("")
  const [checkbox, setCheckbox] = useState(false)



  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="form pt-3 px-3">
                <div>
                  <input
                    type="text " className=" info mt-2" placeholder="Insert your name"
                    value=""
                    onChange={setName} />
                </div>
                <div>
                  <input type="text " className="info mt-2" placeholder="Insert tiket title"
                    value=""
                    onChange={setTitle} />
                </div>
                <div>
                  <input type="text" className="form-control mt-2" placeholder="Insert your tiket message"
                    value=""
                    onChange={seMessage} />
                </div>
                <div>
                  <input type="checkbox" className="form-check-input mt-2"
                    value="false"
                  /> public
                </div>
                <div>
                  <button className="btn btn-primary mt-2">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
