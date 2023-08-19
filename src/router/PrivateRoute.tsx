import React, { PropsWithChildren } from 'react'
import { useSelector } from 'react-redux'
import  {Navigate}  from 'react-router-dom'

const PrivateRoute: React.FC<PropsWithChildren> = ({children}) => {
    const userID = useSelector((state : any)=> state.user)
  return (
    <div>
        {
            userID? <div>{children}</div> : <Navigate to="/landing"/>
        }

    </div>
  )
}

export default PrivateRoute