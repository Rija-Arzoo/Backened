const asyncHnadler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).reject((err) => next(err))
    }
}

export { asyncHnadler };


/*const asyncHnadler = (fn) => aysnc(req, res, next) => {
    try {
        await fn(req,res,next)
    } catch (error) {
        res.status(error.code || 500).json({
            success:false,
            message:error.message
        });
    }
}*/