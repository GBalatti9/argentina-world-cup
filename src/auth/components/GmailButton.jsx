import { fetchApi } from '../helpers';
import gmailIcon from '/assets/gmail/gmail.png'

export const GmailButton = ({ type }) => {
    const typeToUse = type.charAt(0).toUpperCase() + type.slice(1);

    const handleSubmit = async ( e ) => {
        e.preventDefault();
        console.log('handlesubmit');
        const data = await fetchApi(`${ type } with gmail`);
        // console.log(data.redirectUrl);
        const redirectUrl = data ? data.redirectUrl : '';
        console.log(redirectUrl);
        window.open(redirectUrl, '_blank');
    }

    return (
        <>
            <form className='mx-auto mb-3' onSubmit={ handleSubmit }>
                <button type="submit" className='p-2 btn btn-secondary'> 
                    <img 
                        src   = { gmailIcon } 
                        style = {{ width: '25px' }} /> 
                    <span className='p-2'>
                        { typeToUse } with Gmail
                    </span>
                </button>
            </form>
        </>
    )
}
