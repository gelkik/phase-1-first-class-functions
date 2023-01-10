function receivesAFunction (liftWeight) {
    liftWeight();
}

function returnsANamedFunction(){
    const liftWeight = function(){
        console.log('I lift.')
    }

    return liftWeight;
}

function returnsAnAnonymousFunction(){
    return function (){
        console.log('I lift too.');
    }
}