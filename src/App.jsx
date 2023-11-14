

//importing context data
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { NameContext } from "./context/AuthContext";
import { NameContextNew } from "./context/Example";   //for exmaple


function App() {
  const { user,isFetching } = useContext(AuthContext);

  const {age} = useContext(NameContext)

  const { address} = useContext(NameContextNew)
  return (
    <>
      <div className="card">
        <p>
          this is user data {user}{age}
          <br />
          this is address {address}
          <br />
          this is feching status {isFetching}
        </p>
      </div>
    </>
  )
}

export default App
