import mongoose, { Document, Schema } from 'mongoose';

export interface IPayment extends Document {
    orderId: mongoose.Types.ObjectId;
    amount: number;
    paymentGeneratedDate: Date
    paymentMadeDate: Date;
    paymentStatus: 'pending' | 'success' | 'failed';
    reference: string;
    access_code: string;
    authorization_url: string;

}

const PaymentSchema: Schema = new Schema({
    orderId: { type: Schema.Types.ObjectId, ref: 'Order', required: true },
    amount: { type: Number, required: true },
    paymentGeneratedDate: { type: Date, default: Date.now },
    paymentMadeDate: { type: Date},
    paymentStatus: { type: String, required: true, enum: ['pending', 'success', 'failed'], default: 'pending' },
    reference: { type: String, required: true },
    access_code: { type: String, required: true },
    authorization_url: { type: String, required: true }
});

export const PaymentModel = mongoose.model<IPayment>('Payment', PaymentSchema);
