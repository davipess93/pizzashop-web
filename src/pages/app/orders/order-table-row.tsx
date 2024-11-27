import { ArrowRight, Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableHead, TableRow } from '@/components/ui/table'

import { OrderDetails } from './order-details'

export function OrderTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <Search className="h-3 w-3" />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>

          <OrderDetails />
        </Dialog>
      </TableCell>
      <TableHead className="font-mono text-xs font-medium">
        9848sa4d48d4f1d523d
      </TableHead>
      <TableHead className="text-muted-foreground">há 15 minutos</TableHead>
      <TableHead>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400" />
          <span className="font-medium text-muted-foreground">Pendente</span>
        </div>
      </TableHead>
      <TableHead className="font-medium">Davi Pessoa</TableHead>
      <TableHead className="font-medium"> R$ 149,90</TableHead>
      <TableHead>
        <Button variant="outline" size="xs">
          <ArrowRight className="mr-2 h-3 w-3" />
          Aprovar
        </Button>
      </TableHead>
      <TableHead>
        <Button variant="ghost" size="xs">
          <X className="mr-2 h-3 w-3" />
          Cancelar
        </Button>
      </TableHead>
    </TableRow>
  )
}
