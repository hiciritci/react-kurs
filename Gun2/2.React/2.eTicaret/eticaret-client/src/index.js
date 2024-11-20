import React from 'react';
import ReactDOM from 'react-dom/client'
import "./index.css";
import App from './components/App';
import { Provider } from 'react-redux';
import { store } from './features/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <QueryClientProvider client={queryClient}>
        <Provider store={store}>
            <App />
        </Provider>
    </QueryClientProvider>


);