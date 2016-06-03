import Jasmine from 'jasmine'

const framework = (events, system, opts) => {
    let jasmineRunner
    events.onLoad = () => {
        jasmineRunner = new Jasmine()
    }
    events.onExit = () => {
        const promise = new Promise((resolve, reject) => {
            jasmineRunner.onComplete(function (passed) {
                resolve()
            })
        })
        jasmineRunner.execute()
        return promise
    }
}

export { framework }
