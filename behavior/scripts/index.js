'use strict'

exports.handle = function handle(client) {
<<<<<<< HEAD
    const sayHello = client.createStep({
                                       satisfied() {
                                       return Boolean(client.getConversationState().helloSent)
                                       },
                                       
                                       prompt() {
                                       client.addResponse('app:response:name:welcome')
                                       client.addResponse('app:response:name:provide/documentation', {
                                                          documentation_link: 'http://docs.init.ai',
                                                          })
                                       client.addResponse('app:response:name:provide/instructions')
                                       client.updateConversationState({
                                                                      helloSent: true
                                                                      })
                                       client.done()
                                       }
                                       })
    
    const untrained = client.createStep({
                                        satisfied() {
                                        return false
                                        },
                                        
                                        prompt() {
                                        client.addResponse('app:response:name:apology/untrained')
                                        client.done()
                                        }
                                        })
    
    const handleGreeting = client.createStep({
                                             satisfied() {
                                             return false
                                             },
                                             
                                             prompt() {
                                             client.addTextResponse('Hello world, I mean human')
                                             client.done()
                                             }
                                             })
    
    const handleGoodbye = client.createStep({
                                            satisfied() {
                                            return false
                                            },
                                            
                                            prompt() {
                                            client.addTextResponse('See you later!')
                                            client.done()
                                            }
                                            })
    
    client.runFlow({
                   classifications: {
                   goodbye: 'goodbye',
                   greeting: 'greeting'
                   },
                   streams: {
                   goodbye: handleGoodbye,
                   greeting: handleGreeting,
                   main: 'onboarding',
                   onboarding: [sayHello],
                   end: [untrained]
                   }
                   })
=======
  const sayHello = client.createStep({
    satisfied() {
      return Boolean(client.getConversationState().helloSent)
    },

    prompt() {
      client.addResponse('app:response:name:welcome')
      client.addResponse('app:response:name:provide/documentation', {
        documentation_link: 'http://docs.init.ai',
      })
      client.addResponse('app:response:name:provide/instructions')
      client.updateConversationState({
        helloSent: true
      })
      client.done()
    }
  })

  const untrained = client.createStep({
    satisfied() {
      return false
    },

    prompt() {
      client.addResponse('app:response:name:apology/untrained')
      client.done()
    }
  })

  const handleGreeting = client.createStep({
    satisfied() {
      return false
    },

    prompt() {
      client.addTextResponse('Hello world, I mean human')
      client.done()
    }
  })

  client.runFlow({
    classifications: {
      greeting: 'greeting'
    },
    streams: {
      greeting: handleGreeting,
      main: 'onboarding',
      onboarding: [sayHello],
      end: [untrained]
    }
  })
>>>>>>> origin/master
}
