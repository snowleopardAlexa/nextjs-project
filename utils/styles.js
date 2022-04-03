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

    },
    grow: {
      flex: 1
    },
    main: {
        minHeight: '80vh'
    },
    footer: {
        backgroundColor: '#F2F2F2',
        textAlign: 'center',
        padding: '20px'
    }
})

export default useStyles