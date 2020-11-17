import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ReceiptIcon from '@material-ui/icons/Receipt';
import PaymentIcon from '@material-ui/icons/Payment';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

const styles = (theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        marginTop: 20,
        border: "1px solid",
        borderColor: theme.palette.text.hint,
        padding: 20,
        borderRadius: 5
    },
    container: {
        padding: theme.spacing.unit,
    },
    listItemText: {
        color: theme.palette.text.secondary,
    },
});
class ListItemComponent extends React.PureComponent {
    render() {
        const { classes, className } = this.props;
        return (
            <div className={classes.container}>

                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >
                    <ListItem button className={classes.root}>
                        <ListItemIcon>
                            <ReceiptIcon className={classes.listItemText} />
                        </ListItemIcon>
                        <ListItemText classes={{ primary: classes.listItemText }} primary="Recarga de cartão via boleto" />
                    </ListItem>
                    <ListItem button className={classes.root}>
                        <ListItemIcon>
                            <PaymentIcon className={classes.listItemText} />
                        </ListItemIcon>
                        <ListItemText classes={{ primary: classes.listItemText }} primary="Transferencias entre titulares" />
                    </ListItem>
                    <ListItem button className={classes.root}>
                        <ListItemIcon>
                            <AccountBalanceIcon className={classes.listItemText} />
                        </ListItemIcon>
                        <ListItemText classes={{ primary: classes.listItemText }} primary="Pagamento de boleto" />
                    </ListItem>
                </List>
            </div>
        );
    }
}
export default withStyles(styles)(ListItemComponent);