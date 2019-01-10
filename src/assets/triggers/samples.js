export const Default = `
//     ___               _       _         _                        _   _
//    / __\\ __ _   _ ___| |_    /_\\  _   _| |_ ___  _ __ ___   __ _| |_(_) ___  _ __
//   / / | '__| | | / __| __|  //_\\\\| | | | __/ _ \\| '_ \` _ \\ / _\` | __| |/ _ \\| '_ \\
//  / /__| |  | |_| \\__ \\ |_  /  _  \\ |_| | || (_) | | | | | | (_| | |_| | (_) | | | |
//  \\____/_|   \\__,_|___/\\__| \\_/ \\_/\\__,_|\\__\\___/|_| |_| |_|\\__,_|\\__|_|\\___/|_| |_|

// Crust automation triggers will help you manage your CRM records
// It is a simple JavaScript engine that runs custom code that triggers manually
// or automatically before/after certain record events (create, update, delete)
//
// Available variables:
// record   (object)   current record
// module   (object)   module of the current record
// action   (string)   name of the action that triggered this: 'manual',
//                     'beforeCreate', 'afterCreate',
//                     'beforeUpdate', 'afterUpdate',
//                     'beforeDelete', 'afterDelete'

// API:
// crust.api.record.save(record)
// crust.api.record.delete(record)
// crust.helpers.record.new(module[, initial-values])
//   Create a new record, you can use \`record.values\` to copy values from an existing record
//   (where field name matches)
// crust.helpers.send.email({ to, from, subject, body }) @todo
// crust.helpers.send.message({ channel, direct, message }) @todo
// crust.helpers.ui.alert.success(text) shows success text to CRM user
// crust.helpers.ui.alert.error(text) shows error text to CRM user

// Returning from trigger
// When one or more trigger is ran, you can break execution of any additional triggers or
// the default action (in case of "before..." trigger actions) by returning false boolean value
// from your code.

// Above comments are safe to delete. Crust CRM will add it on every new trigger.
`.trimLeft()

export const SimpleFieldValueCheck = `
if (record.values.field1 === 'a' && record.values.field2 === 'b') {
  // Do not save this record if field1 and field2 do not have expected values!
  // This could be used on beforeUpdate or beforeCreate triggers.
  return false
}
`.trimLeft()

export const MakeNewRecord = `
// Whenever this code is triggered, create a new record from another module
// eg: Make account record from a lead record
if (!crust.api.record.save(crust.helpers.record.new('Account', record.values)))) {
  return false
}
`.trimLeft()

export const SimpleNotification = `
crust.helpers.ui.alert.success('This is a notification')
// crust.helpers.ui.alert.error('This is an error')
`.trimLeft()