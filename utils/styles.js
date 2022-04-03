// Material-UI styles
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    navbar: {
        backgroundColor: '#F2F2F2',
        '& a' : {
            color: '#000',
            marginLeft: 10,
        }
    },
    brand: {
       fontWeight: 'bold',
       fontSize: '1.5rem'
    },
    grow: {
      flexGrow: 1
    },
    main: {
        minHeight: '80vh'
    },
    footer: {
        backgroundColor: '#F2F2F2',
        textAlign: 'center',
        padding: '20px'
    },
    section: {
        marginTop: 10,
        marginBottom: 10
    }
})

export default useStyles