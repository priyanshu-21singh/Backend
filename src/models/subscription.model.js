import moongoose from "mongoose"

const subscriptionSchema = new Schema(
    {
    subscriber: {
        type:Schema.Types.ObjectId, // one who is scubscribing 
        ref: "User"
    },
    chanel: {
        type:Schema.Types.ObjectId, // subcriber
        ref: "User"
    }
}, {timestamps: true}
)


export const Subsciption = mongoose.model("Subsciption", subscriptionSchema)