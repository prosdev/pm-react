import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './components/App'


const networkInterface = createNetworkInterface({
    uri: 'http://localhost:4000/graphql'
});

const Client = new ApolloClient({
    networkInterface,
    dataIdFromObject: obj => obj.id
});
const Root = () => {
    return (
        <ApolloProvider client={Client}>
            <Router>
                <App>
                    <Switch>
                        <Route path="/properties" component={App} />
                    </Switch>
                </App>
            </Router>
        </ApolloProvider>
    );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
registerServiceWorker();
