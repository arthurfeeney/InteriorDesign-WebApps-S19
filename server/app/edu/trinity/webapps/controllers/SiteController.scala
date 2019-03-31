package edu.trinity.webapps.controllers

import javax.inject._

import play.api.mvc._
import play.api.data._
import play.api.data.Forms._

case class UserQuery(address: String, query: String)

@Singleton
class SiteController @Inject()(cc: MessagesControllerComponents) extends MessagesAbstractController(cc) {

  val queryForm = Form(
    mapping(
      "address" -> email,
      "query" -> text
    )(UserQuery.apply)(UserQuery.unapply)
  )
  
  def contact = Action { implicit request =>
    Ok(views.html.contact(queryForm))
  }


}
