
export const addNote = (note) => {
    return(dispatch, getState, {getFirestore})=>{
        const firestore = getFirestore()
        firestore.collection('pengeluaran0399').add({...note,createdAt: new Date()}).then(()=>{
            console.log('add note success')
        }).catch((err)=>{
            console.log(err)
        })

    }
}