const connectToDatabase = () => {
    const d_promise = new Promise((resolve, reject)=> {
        setTimeout(()=> {
            resolve()
        }, 1000)
    })

    return d_promise
}

export default connectToDatabase;