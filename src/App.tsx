import { RouterProvider } from 'react-router-dom'
import { mainRoute } from './router/mainRoute'
import { persistStore, } from 'redux-persist'
import { store } from './Global/store'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const persistor = persistStore(store)
const queryClient = new QueryClient()
const App = () => {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>

        <QueryClientProvider client={queryClient}>

          <RouterProvider router={mainRoute} />

          </QueryClientProvider>

        </PersistGate>
      </Provider>
    </div>
  )
}

export default App