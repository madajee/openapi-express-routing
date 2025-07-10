import * as express from 'express'
 
export function hello(req: express.Request, res: express.Response): void {
  const name = req.query.name || 'stranger'
  const message = `Hello, ${name}!`
  res.json({
    "message": message
  })
}

export function goodbye(req: express.Request, res: express.Response): void {
  const name = req.query.name || 'stranger'
  const message = `Goodbye, ${name}!`
  res.json({
    "message": message
  })
}

export function patientRetrieve(req: express.Request, res: express.Response): void {
  const name = req.query.name || 'stranger'
  const message = `Patient is, ${name}!`
  res.json({
    "message": message
  })
}