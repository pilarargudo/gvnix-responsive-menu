@org.hibernate.annotations.TypeDefs({ 
	@org.hibernate.annotations.TypeDef(name="geometry", 
		typeClass = org.hibernate.spatial.GeometryType.class)
})
package com.springsource.petclinic.domain;
