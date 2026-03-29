class ApiError extends Error {
    constructor(
        statusCode,
        message = "something went wrong",
        errors = [],
        stack = ""
    ) {
        super(message)
        this.statusCode =  statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors


        if (stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}



// we have creted a custom error class called apierror
// to standardize how errors are handle in your backend(especially APIS)
