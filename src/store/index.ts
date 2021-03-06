
import { createStore } from 'vuex';

// My custom modules
// import exampleModule from './module-template';
// import { ExampleStateInterface } from './module-template/state';


export interface StateInterface {
    // example: ExampleStateInterface
    example: unknown;
}

export default createStore<StateInterface>({
    modules: {
        // example: exampleModule
    }
})
