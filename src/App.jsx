import { useState } from "react"


function App() {


  const [formData, setFormData] = useState({
    author: '',
    title: '',
    body: '',
    public: false
  })

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formData)
  }




  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <form className=" pt-3 px-3" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text " className=" info mt-2" placeholder="Insert your name"
                    name="author"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })} />
                </div>
                <div>
                  <input type="text " className="info mt-2" placeholder="Insert tiket title"
                    name="title"
                    value={formData.title}

                    onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
                </div>
                <div>
                  <input type="text" className="form-control mt-2" placeholder="Insert your tiket message"
                    name='body'
                    value={formData.body}
                    onChange={(e) => setFormData({ ...formData, body: e.target.value })} />
                </div>
                <div>
                  <input type="checkbox" className="form-check-input mt-2"
                    name="public"
                    checked={formData.public}
                    onChange={(e) => setFormData({ ...formData, public: e.target.checked })}
                  /> public
                </div>

                <button type="submit" className="btn btn-primary mt-2"
                >Submit</button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
